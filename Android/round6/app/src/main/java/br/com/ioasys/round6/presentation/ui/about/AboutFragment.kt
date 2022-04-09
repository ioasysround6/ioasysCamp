package br.com.ioasys.round6.presentation.ui.about

import android.graphics.Outline
import android.os.Bundle
import android.util.TypedValue
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.view.ViewOutlineProvider
import androidx.fragment.app.Fragment
import br.com.ioasys.round6.databinding.FragmentAboutBinding

class AboutFragment : Fragment() {
    private var _binding: FragmentAboutBinding? = null
    private val binding: FragmentAboutBinding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View = FragmentAboutBinding.inflate(inflater, container, false).apply {
        _binding = this
    }.root

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        setCorners()
    }

    private fun setCorners() {
        val cardView = binding.ivCardView
        val image = binding.aboutImage

        val outlineProvider = object : ViewOutlineProvider() {
            override fun getOutline(view: View?, outline: Outline?) {
                val left = 0
                val top = 0
                val right = view?.width
                val bottom = view?.height
                val cornerRadiusDP = 30f
                val cornerRadius = TypedValue.applyDimension(
                    TypedValue.COMPLEX_UNIT_DIP,
                    cornerRadiusDP,
                    resources.displayMetrics
                ).toInt()

                if (right != null && bottom != null) {
                    outline?.setRoundRect(
                        left,
                        top - cornerRadius,
                        right,
                        bottom,
                        cornerRadius.toFloat()
                    )
                }
            }
        }

        image.outlineProvider = outlineProvider
        image.clipToOutline = true

        cardView.outlineProvider = outlineProvider
        cardView.clipToOutline = true
    }
}