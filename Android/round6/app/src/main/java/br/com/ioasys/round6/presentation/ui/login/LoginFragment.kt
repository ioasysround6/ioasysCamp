package br.com.ioasys.round6.presentation.ui.login

import android.os.Bundle
import android.text.method.HideReturnsTransformationMethod
import android.text.method.PasswordTransformationMethod
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import br.com.ioasys.round6.R
import br.com.ioasys.round6.databinding.FragmentLoginBinding

class LoginFragment : Fragment() {
    private var _binding: FragmentLoginBinding? = null
    private val binding: FragmentLoginBinding get() = _binding!!

    private var isShowPass = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
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
    }

    private fun setOnClickListener() {
        binding.apply {
            btnSingIn.setOnClickListener {
                findNavController().navigate(R.id.action_loginFragment_to_packagesDetailsFragment)
            }

            passwordToggle.setOnClickListener {
                isShowPass = !isShowPass
                showPassword(isShowPass)
            }

            tvAccount.setOnClickListener {
                findNavController().navigate(R.id.action_loginFragment_to_registerFragment)
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

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}