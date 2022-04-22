package br.com.ioasys.round6.presentation.ui.register

import android.os.Bundle
import android.text.method.HideReturnsTransformationMethod
import android.text.method.PasswordTransformationMethod
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.core.widget.addTextChangedListener
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import br.com.ioasys.round6.R
import br.com.ioasys.round6.databinding.FragmentRegisterBinding
import br.com.ioasys.round6.domain.exception.*
import br.com.ioasys.round6.presentation.utils.Constants
import br.com.ioasys.round6.presentation.utils.extension.openExternalUrl
import br.com.ioasys.round6.presentation.viewmodels.RegisterViewModel
import br.com.ioasys.round6.utils.ViewState
import org.koin.androidx.viewmodel.ext.android.viewModel

class RegisterFragment : Fragment() {
    private var _binding: FragmentRegisterBinding? = null
    private val binding: FragmentRegisterBinding get() = _binding!!

    private var isShowPass = false

    private val registerViewModel: RegisterViewModel by viewModel()

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

        binding.tvContact.setOnClickListener {
            openExternalUrl(Constants.EXTERNAL_URL)
        }

        binding.btnRegister.setOnClickListener {
            binding.run {
                registerViewModel.register(
                    inputName.text.toString(),
                    inputLastName.text.toString(),
                    inputBirth.text.toString(),
                    inputEmail.text.toString(),
                    inputPassword.text.toString()
                )

                inputName.addTextChangedListener {
                    inputName.setBackgroundResource(R.drawable.input_background)
                }

                inputLastName.addTextChangedListener {
                    inputLastName.setBackgroundResource(R.drawable.input_background)
                }

                inputBirth.addTextChangedListener {
                    messageErrorBirth.visibility = View.GONE
                    inputBirth.setBackgroundResource(R.drawable.input_background)
                }

                inputEmail.addTextChangedListener {
                    messageErrorEmail.visibility = View.GONE
                    inputEmail.setBackgroundResource(R.drawable.input_background)
                }

                inputPassword.addTextChangedListener {
                    messageErrorPassword.visibility = View.GONE
                    inputPassword.setBackgroundResource(R.drawable.input_background)
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
                is ViewState.Loading -> {
                    binding.progressBar.visibility = View.VISIBLE
                }
                is ViewState.Success -> {
                    emptyError(false)
                    invalidBirthDate(false)
                    invalidPassword(false)

                    findNavController().navigate(R.id.action_registerFragment_to_loginFragment)
                    Toast.makeText(
                        requireContext(),
                        "Cadastro realizado com sucesso!",
                        Toast.LENGTH_SHORT
                    ).show()
                }
                is ViewState.Error -> {
                    binding.progressBar.visibility = View.GONE
                    when (state.throwable) {
                        is InvalidNameException -> emptyError(true)
                        is InvalidLastNameException -> emptyError(true)
                        is EmptyEmailException -> emptyError(true)
                        is EmptyBirthDateException -> emptyError(true)
                        is EmptyPasswordException -> emptyError(true)
                        is InvalidEmailFormatException -> invalidEmail(true)
                        is InvalidBirthDateException -> invalidBirthDate(true)
                        is InvalidPasswordFormatException -> invalidPassword(true)
                    }
                }
                else -> Unit
            }
        }
    }

    private fun emptyError(error: Boolean) {
        if (error) {
            binding.apply {
                binding.inputName.setBackgroundResource(R.drawable.input_background_error)
                binding.inputLastName.setBackgroundResource(R.drawable.input_background_error)
                binding.inputBirth.setBackgroundResource(R.drawable.input_background_error)
                binding.inputEmail.setBackgroundResource(R.drawable.input_background_error)
                binding.inputPassword.setBackgroundResource(R.drawable.input_background_error)
            }

            Toast.makeText(
                requireContext(),
                "Por favor, preencha todos os campos",
                Toast.LENGTH_SHORT
            ).show()
        }
    }

    private fun invalidBirthDate(error: Boolean) {
        binding.apply {
            messageErrorBirth.visibility = if (error) View.VISIBLE else View.GONE
        }
    }

    private fun invalidEmail(error: Boolean) {
        binding.apply {
            messageErrorEmail.visibility = if (error) View.VISIBLE else View.GONE
        }
    }

    private fun invalidPassword(error: Boolean) {
        binding.apply {
            messageErrorPassword.visibility = if (error) View.VISIBLE else View.GONE
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        registerViewModel.resetViewState()
        _binding = null
    }
}