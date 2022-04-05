package br.com.ioasys.round6.presentation.ui.register

import android.os.Bundle
import android.text.method.HideReturnsTransformationMethod
import android.text.method.PasswordTransformationMethod
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import br.com.ioasys.round6.R
import br.com.ioasys.round6.databinding.FragmentRegisterBinding
import br.com.ioasys.round6.presentation.components.ConfirmationDialog

class RegisterFragment : Fragment() {
    private var _binding: FragmentRegisterBinding? = null
    private val binding: FragmentRegisterBinding get() = _binding!!

    private var isShowPass = false

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View = FragmentRegisterBinding.inflate(inflater, container, false).apply {
        _binding = this
    }.root

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        setOnClickListener()
        showPassword(isShowPass)
    }

    private fun setOnClickListener() {
        binding.apply {
            btnBack.setOnClickListener {
                findNavController().navigateUp()
            }

            passwordToggle.setOnClickListener {
                isShowPass = !isShowPass
                showPassword(isShowPass)
            }

            btnRegister.setOnClickListener {
                ConfirmationDialog(
                    onSubmitClickListener = {
                        Toast.makeText(requireContext(), "Testando Dialog", Toast.LENGTH_SHORT).show()
                    }
                ).show(parentFragmentManager, "dialog")
            }
        }
    }

    private fun showPassword(isShow: Boolean) {
        if (isShow) {
            binding.apply {
                inputPassword.transformationMethod =
                    HideReturnsTransformationMethod.getInstance()
                passwordToggle.setImageResource(R.drawable.hide_password)
            }
        } else {
            binding.apply {
                inputPassword.transformationMethod = PasswordTransformationMethod.getInstance()
                passwordToggle.setImageResource(R.drawable.show_password)
            }
        }
        binding.inputPassword.setSelection(binding.inputPassword.text.toString().length)
    }
}