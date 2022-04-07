package br.com.ioasys.round6.presentation.ui.packages

import android.graphics.Outline
import android.os.Bundle
import android.util.TypedValue
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.view.ViewOutlineProvider
import androidx.fragment.app.Fragment
import br.com.ioasys.round6.databinding.FragmentPackagesDetailsBinding
import com.denzcoskun.imageslider.constants.ScaleTypes
import com.denzcoskun.imageslider.models.SlideModel

class PackagesDetailsFragment : Fragment() {
    private var _binding: FragmentPackagesDetailsBinding? = null
    private val binding: FragmentPackagesDetailsBinding get() = _binding!!

    private val imageList = ArrayList<SlideModel>()
    private var num = 0

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View = FragmentPackagesDetailsBinding.inflate(inflater, container, false).apply {
        _binding = this
    }.root

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        setImageSlider()
        counterButton()
        setCorners()
    }

    private fun counterButton() {
        binding.apply {
            plusButton.setOnClickListener {
                num++
                tvPeopleAmountNumber.text = num.toString()
            }

            minusButton.setOnClickListener {
                num--
                if (num < 0) {
                    num = 0
                } else {
                    tvPeopleAmountNumber.text = num.toString()
                }
            }
        }
    }

    private fun setImageSlider() {
        val imageSlider = binding.imageSlider

        imageList.add(
            SlideModel(
                "https://hips.hearstapps.com/cosmouk.cdnds.net/15/09/nrm_1424797429-wild-travelling.jpg",
                ScaleTypes.CENTER_CROP
            )
        )
        imageList.add(
            SlideModel(
                "https://thesabbaticalguide.com/wp-content/uploads/2019/11/Leaving-present-for-someone-going-travelling.jpg",
                ScaleTypes.CENTER_CROP
            )
        )
        imageList.add(
            SlideModel(
                "https://static.vueling.com/blog/media/1516/21_destinos-para-viajar-solo.jpg",
                ScaleTypes.CENTER_CROP
            )
        )

        imageSlider.setImageList(imageList)
    }

    private fun setCorners() {
        val cardView = binding.cardView
        val imageSlider = binding.imageSlider

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
                    outline?.setRoundRect(left, top - cornerRadius, right, bottom, cornerRadius.toFloat())
                }
            }
        }

        imageSlider.outlineProvider = outlineProvider
        imageSlider.clipToOutline = true

        cardView.outlineProvider = outlineProvider
        cardView.clipToOutline = true
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}