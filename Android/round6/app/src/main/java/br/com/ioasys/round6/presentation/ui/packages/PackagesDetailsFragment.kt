package br.com.ioasys.round6.presentation.ui.packages

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import br.com.ioasys.round6.databinding.FragmentPackagesDetailsBinding

class PackagesDetailsFragment : Fragment() {
    private var _binding: FragmentPackagesDetailsBinding? = null
    private val binding: FragmentPackagesDetailsBinding get() = _binding!!

    private var num = 0

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View = FragmentPackagesDetailsBinding.inflate(inflater, container, false).apply {
        _binding = this
    }.root

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        counterButton()
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

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}