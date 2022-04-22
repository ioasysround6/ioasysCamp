package br.com.ioasys.round6.presentation.components

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.view.WindowManager
import androidx.fragment.app.DialogFragment
import br.com.ioasys.round6.databinding.DialogSummaryBinding

class SummaryDialog : DialogFragment() {

    private lateinit var binding: DialogSummaryBinding

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = DialogSummaryBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onStart() {
        super.onStart()
        dialog?.window?.setLayout(
            WindowManager.LayoutParams.MATCH_PARENT,
            WindowManager.LayoutParams.WRAP_CONTENT,
        )
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        setUpListeners()
    }

    private fun setUpListeners() {
        binding.btnSingIn.setOnClickListener {
            ConfirmationDialog().show(childFragmentManager, javaClass.name)
        }

        binding.buttonExit.setOnClickListener {
            dismiss()
        }
    }
}