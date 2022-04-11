package br.com.ioasys.round6.presentation.ui.register

import android.os.Bundle
import android.text.method.HideReturnsTransformationMethod
import android.text.method.PasswordTransformationMethod
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.core.widget.addTextChangedListener
import androidx.fragment.app.Fragment
import androidx.fragment.app.viewModels
import androidx.navigation.fragment.findNavController
import br.com.ioasys.round6.R
import br.com.ioasys.round6.databinding.FragmentRegisterBinding
import br.com.ioasys.round6.presentation.viewmodels.RegisterViewModel
import br.com.ioasys.round6.utils.ViewState

class RegisterFragment : Fragment() {
    private var _binding: FragmentRegisterBinding? = null
    private val binding: FragmentRegisterBinding get() = _binding!!

    private var isShowPass = false

    private val registerViewModel: RegisterViewModel by viewModels()

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
        addObserver()
    }

    private fun setOnClickListener() {
        binding.btnBack.setOnClickListener {
            findNavController().navigateUp()
        }

        binding.passwordToggle.setOnClickListener {
            isShowPass = !isShowPass
            showPassword(isShowPass)
        }

        binding.btnRegister.setOnClickListener {
            binding.run {
                registerViewModel.register(
                    inputName.text.toString(),
                    inputLastName.text.toString(),
                    inputBirth.text.toString(),
                    inputEmail.text.toString(),
                    inputEmail.text.toString()
                )

                inputBirth.addTextChangedListener {
                    messageErrorBirth.visibility = View.GONE
                }

                inputEmail.addTextChangedListener {
                    messageErrorEmail.visibility = View.GONE
                }

                inputPassword.addTextChangedListener {
                    messageErrorPassword.visibility = View.GONE
                }
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

    private fun addObserver() {
        registerViewModel.registeredUserViewState.observe(viewLifecycleOwner) { state ->

            when (state) {
                is ViewState.Success -> {
                    findNavController().navigate(R.id.action_registerFragment_to_loginFragment)
                }
                is ViewState.Error -> {
                    binding.apply {
                        messageErrorBirth.visibility = View.VISIBLE
                        messageErrorEmail.visibility = View.VISIBLE
                        messageErrorPassword.visibility = View.VISIBLE
                    }
                }
                else -> Unit
            }
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        registerViewModel.resetViewState()
        _binding = null
    }
}