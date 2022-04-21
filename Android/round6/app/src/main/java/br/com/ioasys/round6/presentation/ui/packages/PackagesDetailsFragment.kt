package br.com.ioasys.round6.presentation.ui.packages

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
import androidx.navigation.fragment.navArgs
import androidx.viewpager2.widget.ViewPager2
import br.com.ioasys.round6.R
import br.com.ioasys.round6.databinding.FragmentPackagesDetailsBinding
import br.com.ioasys.round6.domain.model.Tour
import br.com.ioasys.round6.presentation.adapters.SliderViewPagerAdapter
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

class PackagesDetailsFragment : Fragment() {

    private val args: PackagesDetailsFragmentArgs by navArgs()
    private lateinit var tour: Tour
    private var _binding: FragmentPackagesDetailsBinding? = null
    private val binding: FragmentPackagesDetailsBinding get() = _binding!!

    private var num = 0

    private lateinit var viewPager: ViewPager2
    private lateinit var sliderViewViewPagerAdapter: SliderViewPagerAdapter

    private val mImageList = listOf(
        "https://i.imgur.com/EKE6lmt.png",
        "https://i.imgur.com/0WbJLsJ.jpg",
        "https://i.imgur.com/VzfYJsl.png"
    )

    private var dots: Array<TextView?> = arrayOfNulls<TextView>(mImageList.size)

    private var onImageChangeCallback = object : ViewPager2.OnPageChangeCallback() {
        override fun onPageSelected(position: Int) {
            super.onPageSelected(position)
            addDots(position)
        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View = FragmentPackagesDetailsBinding.inflate(inflater, container, false).apply {
        _binding = this
    }.root

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        tour = args.tour
        counterButton()
        setViewPagerSlider()
        setClickListener()
        setupView()
    }

    private fun setClickListener() {
        binding.apply {
            btnBack.setOnClickListener {
                findNavController().navigateUp()
            }

            btnBuyPackage.setOnClickListener {
                findNavController().navigate(R.id.action_packagesDetailsFragment_to_checkoutFragment)
            }
        }
    }

    private fun counterButton() {
        binding.apply {
            plusButton.setOnClickListener {
                num++
                peopleAmountNumber.text = num.toString()
            }

            minusButton.setOnClickListener {
                num--
                if (num < 0) {
                    num = 0
                } else {
                    peopleAmountNumber.text = num.toString()
                }
            }
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

    private fun setupView() {
        binding.apply {
            packageTitle.text = tour.tourName
            packagePrice.text = tour.price
            packageDescription.text = tour.description
            packageVacancy.text = tour.vacancies.toString()
            tvAccommodationDesc.text = tour.accommodation
            activitiesDesc.text = tour.activities
            datesDesc.text = tour.travelDate
            hintDesc.text = tour.hint
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}