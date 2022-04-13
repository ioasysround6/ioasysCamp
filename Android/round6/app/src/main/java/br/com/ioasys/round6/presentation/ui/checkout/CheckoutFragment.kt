package br.com.ioasys.round6.presentation.ui.checkout

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import br.com.ioasys.round6.databinding.FragmentCheckoutBinding
import br.com.ioasys.round6.presentation.adapters.ViewPagerAdapter
import com.google.android.material.tabs.TabLayoutMediator

class CheckoutFragment : Fragment() {
    private var _binding: FragmentCheckoutBinding? = null
    private val binding: FragmentCheckoutBinding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View = FragmentCheckoutBinding.inflate(inflater, container, false).apply {
        _binding = this
    }.root

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        setUpTabLayout()
    }

    private fun setUpTabLayout() {
        val tabLayout = binding.tabLayout
        val viewPager = binding.viewPager
        val adapter = ViewPagerAdapter(childFragmentManager, lifecycle)

        viewPager.adapter = adapter

        TabLayoutMediator(tabLayout, viewPager) { tab, position ->
            when (position) {
                0 -> tab.text = "1. Dados pessoais"
                1 -> tab.text = "2. Pagamento"
            }
        }.attach()
    }


    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}