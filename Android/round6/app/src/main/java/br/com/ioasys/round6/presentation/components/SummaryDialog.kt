package br.com.ioasys.round6.presentation.components

import android.app.AlertDialog
import android.app.Dialog
import android.graphics.Color
import android.graphics.drawable.ColorDrawable
import android.os.Bundle
import android.view.Gravity
import androidx.fragment.app.DialogFragment
import br.com.ioasys.round6.databinding.DialogSummaryBinding

class SummaryDialog : DialogFragment() {

    private lateinit var binding: DialogSummaryBinding

    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        binding = DialogSummaryBinding.inflate(layoutInflater)
        val builder = AlertDialog.Builder(requireActivity())
        builder.setView(binding.root)

        val dialog = builder.create()
        dialog.window!!.setBackgroundDrawable(ColorDrawable(Color.TRANSPARENT))
        dialog.window!!.setGravity(Gravity.CENTER)
        return dialog
    }
}