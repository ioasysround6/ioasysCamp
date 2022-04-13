package br.com.ioasys.round6.presentation.components

import android.app.AlertDialog
import android.app.Dialog
import android.graphics.Color
import android.graphics.drawable.ColorDrawable
import android.os.Bundle
import android.view.Gravity
import androidx.fragment.app.DialogFragment
import br.com.ioasys.round6.databinding.DialogConfirmationBinding

class ConfirmationDialog(
    private val onSubmitClickListener: () -> Unit
) : DialogFragment() {

    private lateinit var binding: DialogConfirmationBinding

    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        binding = DialogConfirmationBinding.inflate(layoutInflater)

        val builder = AlertDialog.Builder(requireActivity())
        builder.setView(binding.root)

        binding.buttonRedirect.setOnClickListener {
            onSubmitClickListener.invoke()
        }

        val dialog = builder.create()
        dialog.window!!.setBackgroundDrawable(ColorDrawable(Color.TRANSPARENT))
        dialog.window!!.setGravity(Gravity.CENTER)
        return dialog
    }

}