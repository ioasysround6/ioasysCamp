package br.com.ioasys.round6.presentation.ui.home

import android.os.Build
import android.os.Bundle
import android.text.Html
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.core.content.ContextCompat
import androidx.fragment.app.Fragment
import androidx.lifecycle.lifecycleScope
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.viewpager2.widget.ViewPager2
import br.com.ioasys.round6.R
import br.com.ioasys.round6.databinding.FragmentHomeBinding
import br.com.ioasys.round6.domain.model.Community
import br.com.ioasys.round6.domain.model.Tour
import br.com.ioasys.round6.presentation.adapters.CommunityAdapter
import br.com.ioasys.round6.presentation.adapters.SliderViewPagerAdapter
import br.com.ioasys.round6.presentation.adapters.TourListAdapter
import br.com.ioasys.round6.presentation.components.CommunitiesDetailsDialog
import br.com.ioasys.round6.presentation.listeners.CommunityClickListener
import br.com.ioasys.round6.presentation.listeners.TourClickListener
import br.com.ioasys.round6.presentation.viewmodels.HomeViewModel
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import org.koin.androidx.viewmodel.ext.android.viewModel

class HomeFragment : Fragment(), TourClickListener, CommunityClickListener {
    private val homeViewModel: HomeViewModel by viewModel()

    private lateinit var tourListAdapter: TourListAdapter
    private lateinit var communityAdapter: CommunityAdapter

    private lateinit var viewPager: ViewPager2
    private lateinit var sliderViewViewPagerAdapter: SliderViewPagerAdapter

    private val mImageList = listOf(
        "https://i.imgur.com/3yucTHb.jpg",
        "https://i.imgur.com/lj1xdBX.jpg",
        "https://i.imgur.com/FHEKseg.jpg"
    )

    private var dots: Array<TextView?> = arrayOfNulls(mImageList.size)

    private var _binding: FragmentHomeBinding? = null
    private val binding: FragmentHomeBinding get() = _binding!!

    private var onImageChangeCallback = object : ViewPager2.OnPageChangeCallback() {
        override fun onPageSelected(position: Int) {
            super.onPageSelected(position)
            addDots(position)
        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View = FragmentHomeBinding.inflate(inflater, container, false).apply {
        _binding = this
    }.root

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        setTourListData()
        setCommunityData()
        setViewPagerSlider()
        setOnClickListener()
    }

    private fun setOnClickListener() {
        binding.apply {
            howButton.setOnClickListener {
                findNavController().navigate(R.id.action_homeFragment_to_aboutFragment)
            }

            ivProfile.setOnClickListener {
                findNavController().navigate(R.id.action_homeFragment_to_accountFragment)
            }
        }

    }

    private fun setCommunityData() {
        communityAdapter = CommunityAdapter(this)
        binding.rvCommunities.adapter = communityAdapter
        binding.rvCommunities.layoutManager =
            LinearLayoutManager(context, LinearLayoutManager.HORIZONTAL, false)

        homeViewModel.listCommunity.observe(viewLifecycleOwner) {
            communityAdapter.submitList(it)
        }
    }

    private fun setTourListData() {
        tourListAdapter = TourListAdapter(this)
        binding.rvPackage.adapter = tourListAdapter
        binding.rvPackage.layoutManager =
            LinearLayoutManager(context, LinearLayoutManager.HORIZONTAL, false)

        homeViewModel.listTour.observe(viewLifecycleOwner) {
            tourListAdapter.submitList(it)
        }
    }

    private fun setViewPagerSlider() {
        viewPager = binding.imageSlider
        sliderViewViewPagerAdapter = SliderViewPagerAdapter(mImageList)

        viewPager.apply {
            adapter = sliderViewViewPagerAdapter
            registerOnPageChangeCallback(onImageChangeCallback)
        }

        lifecycleScope.launch {
            while (true) {
                for (i in 0..mImageList.size) {
                    delay(11000)
                    if (i == 0) {
                        viewPager.setCurrentItem(i, false)
                    } else {
                        viewPager.setCurrentItem(i, true)
                    }
                }
            }
        }
    }

    private fun addDots(currentPage: Int) {
        binding.sliderIndicatorDots.removeAllViews()
        for (i in mImageList.indices) {
            dots[i] = TextView(requireContext())
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                dots[i]?.text = Html.fromHtml("&#8226", Html.FROM_HTML_MODE_LEGACY)
            } else {
                dots[i]?.text = Html.fromHtml("&#8226")
            }
            dots[i]?.textSize = 38f
            dots[i]?.setTextColor(ContextCompat.getColor(requireContext(), R.color.sliderDots))
            binding.sliderIndicatorDots.addView(dots[i])
        }

        if (dots.isNotEmpty()) {
            dots[currentPage]?.setTextColor(
                ContextCompat.getColor(
                    requireContext(),
                    R.color.white
                )
            )
        }
    }

    override fun onTourClickListener(tour: Tour) {
        val action = HomeFragmentDirections.actionHomeFragmentToPackagesDetailsFragment(tour)
        findNavController().navigate(action)
    }

    override fun onCommunityClickListener(community: Community) {
        CommunitiesDetailsDialog.newInstance(community).show(childFragmentManager, "communities")
    }

    override fun onDestroyView() {
        super.onDestroyView()
        viewPager.unregisterOnPageChangeCallback(onImageChangeCallback)
        _binding = null
    }
}