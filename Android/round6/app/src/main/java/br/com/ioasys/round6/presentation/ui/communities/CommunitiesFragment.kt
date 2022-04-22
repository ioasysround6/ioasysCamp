package br.com.ioasys.round6.presentation.ui.communities

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.fragment.app.Fragment
import br.com.ioasys.round6.databinding.FragmentCommunitiesBinding
import br.com.ioasys.round6.presentation.components.CommunitiesDetailsDialog

class CommunitiesFragment : Fragment() {
    private var _binding: FragmentCommunitiesBinding? = null
    private val binding: FragmentCommunitiesBinding get() = _binding!!

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        setOnClickListener()
    }

    private fun setOnClickListener() {
        binding.saveCommunities01.setOnClickListener {
            CommunitiesDetailsDialog().show(childFragmentManager, javaClass.name)
        }
        binding.saveCommunities02.setOnClickListener {
            Toast.makeText(context, "Teste 02", Toast.LENGTH_LONG).show()
        }
        binding.saveCommunities03.setOnClickListener {
            Toast.makeText(context, "Teste 03", Toast.LENGTH_LONG).show()
        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View = FragmentCommunitiesBinding.inflate(inflater, container, false).apply {
        _binding = this
    }.root

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}