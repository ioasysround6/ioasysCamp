package br.com.ioasys.round6.presentation.ui.home

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.LinearLayoutManager
import br.com.ioasys.round6.R
import br.com.ioasys.round6.databinding.FragmentHomeBinding
import br.com.ioasys.round6.domain.model.Community
import br.com.ioasys.round6.domain.model.Tour
import br.com.ioasys.round6.presentation.adapters.CommunityAdapter
import br.com.ioasys.round6.presentation.adapters.TourClickListener
import br.com.ioasys.round6.presentation.adapters.TourListAdapter
import br.com.ioasys.round6.presentation.viewmodels.TourViewModel
import org.koin.androidx.viewmodel.ext.android.viewModel

class HomeFragment : Fragment(), TourClickListener {
    private val tourViewModel: TourViewModel by viewModel()

    private lateinit var tourListAdapter: TourListAdapter
    private lateinit var communityAdapter: CommunityAdapter

    private var _binding: FragmentHomeBinding? = null
    private val binding: FragmentHomeBinding get() = _binding!!

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
    }

    private fun setCommunityData() {
        communityAdapter = CommunityAdapter()
        binding.rvCommunities.adapter = communityAdapter
        binding.rvCommunities.layoutManager =
            LinearLayoutManager(context, LinearLayoutManager.HORIZONTAL, false)

        communityAdapter.submitList(Community.getCommunity())
    }

    private fun setTourListData() {
        tourListAdapter = TourListAdapter(this)
        binding.rvPackage.adapter = tourListAdapter
        binding.rvPackage.layoutManager =
            LinearLayoutManager(context, LinearLayoutManager.HORIZONTAL, false)

        tourViewModel.listTour.observe(viewLifecycleOwner) {
            tourListAdapter.submitList(it)
        }
    }

    override fun onTourClickListener(tour: Tour) {
        findNavController().navigate(R.id.action_homeFragment_to_packagesDetailsFragment)
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}