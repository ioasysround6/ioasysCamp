package br.com.ioasys.round6.presentation.ui.login

import android.content.Context
import android.os.Bundle
import android.text.method.HideReturnsTransformationMethod
import android.text.method.PasswordTransformationMethod
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.view.inputmethod.InputMethodManager
import android.widget.Toast
import androidx.core.widget.addTextChangedListener
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import br.com.ioasys.round6.R
import br.com.ioasys.round6.databinding.FragmentLoginBinding
import br.com.ioasys.round6.presentation.viewmodels.LoginViewModel
import br.com.ioasys.round6.utils.ViewState
import org.koin.androidx.viewmodel.ext.android.getViewModel

class LoginFragment : Fragment() {
    private var _binding: FragmentLoginBinding? = null
    private val binding: FragmentLoginBinding get() = _binding!!

    private var isShowPass = false

    private val loginViewModel: LoginViewModel by lazy {
        getViewModel()
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View = FragmentLoginBinding.inflate(inflater, container, false).apply {
        _binding = this
    }.root

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        setOnClickListener()
        showPassword(isShowPass)
        addObserver()
    }

    private fun setOnClickListener() {
        binding.btnSingIn.setOnClickListener {
            hideKeyboard()

            binding.run {
                loginViewModel.login(
                    inputEmail.text.toString(),
                    inputPassword.text.toString()
                )

                inputEmail.addTextChangedListener {
                    messageError.visibility = View.GONE
                    inputEmail.setBackgroundResource(R.drawable.input_background)
                }

                inputPassword.addTextChangedListener {
                    messageError.visibility = View.GONE
                    inputPassword.setBackgroundResource(R.drawable.input_background)
                }
            }

            val inputEmail = binding.inputEmail.text.toString()
            val inputPassword = binding.inputPassword.text.toString()

            if (inputEmail.isEmpty() || inputPassword.isEmpty()) {
                Toast.makeText(
                    requireContext(),
                    "Por favor, preencha os campos",
                    Toast.LENGTH_SHORT
                ).show()
            }
        }

        binding.passwordToggle.setOnClickListener {
            isShowPass = !isShowPass
            showPassword(isShowPass)
        }

        binding.tvAccount.setOnClickListener {
            findNavController().navigate(R.id.action_loginFragment_to_registerFragment)
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
        loginViewModel.loggedUserViewState.observe(viewLifecycleOwner) { state ->

            when (state) {
                is ViewState.Loading -> {
                    binding.progressBar.visibility = View.VISIBLE
                }

                is ViewState.Success -> {
                    findNavController().navigate(R.id.action_loginFragment_to_nav_graph)
                }

                is ViewState.Error -> {
                    binding.apply {
                        progressBar.visibility = View.GONE
                        messageError.visibility = View.VISIBLE
                        inputEmail.setBackgroundResource(R.drawable.input_background_error)
                        inputPassword.setBackgroundResource(R.drawable.input_background_error)
                    }
                }
                else -> Unit
            }
        }
    }

    private fun hideKeyboard() {
        val imm: InputMethodManager =
            requireActivity().getSystemService(Context.INPUT_METHOD_SERVICE) as InputMethodManager

        imm.hideSoftInputFromWindow(view?.windowToken, 0)
    }

    override fun onDestroyView() {
        super.onDestroyView()
        loginViewModel.resetViewState()
        _binding = null
    }
}