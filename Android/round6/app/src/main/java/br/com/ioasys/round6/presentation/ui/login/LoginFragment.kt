package br.com.ioasys.round6.presentation.ui.login

import android.os.Bundle
import android.text.method.HideReturnsTransformationMethod
import android.text.method.PasswordTransformationMethod
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
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
            binding.run {
                loginViewModel.login(
                    inputEmail.text.toString(),
                    inputPassword.text.toString()
                )

                inputEmail.addTextChangedListener {
                    messageError.visibility = View.GONE
                }

                inputPassword.addTextChangedListener {
                    messageError.visibility = View.GONE
                }
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
                is ViewState.Success -> {
                    findNavController().navigate(R.id.action_loginFragment_to_nav_graph)
                }
                is ViewState.Error -> {
                    binding.progressBar.visibility = View.GONE
                    binding.messageError.visibility = View.VISIBLE
                }
                is ViewState.Loading -> {
                    binding.progressBar.visibility = View.VISIBLE
                }
                else -> Unit
            }
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        loginViewModel.resetViewState()
        _binding = null
    }
}