package br.com.ioasys.round6.presentation.components

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.view.WindowManager
import androidx.fragment.app.DialogFragment
import br.com.ioasys.round6.databinding.DialogCommunitiesDetailsBinding
import br.com.ioasys.round6.domain.model.Community
import coil.Coil
import com.squareup.picasso.Picasso
import org.koin.core.Koin

class CommunitiesDetailsDialog : DialogFragment() {

    private lateinit var binding: DialogCommunitiesDetailsBinding
    private var community: Community? = null

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = DialogCommunitiesDetailsBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        setUpListeners()
        setupView()
    }

    override fun onStart() {
        super.onStart()
        dialog?.window?.setLayout(
            WindowManager.LayoutParams.MATCH_PARENT,
            WindowManager.LayoutParams.WRAP_CONTENT,
        )
    }

    private fun setupView() {
        binding.apply {
            communityName.text = community?.communityName
            Picasso.get().load(community?.photo2).into(communityImage)
            communityDescription.text = community?.description
            locationDescription.text = community?.localization
            mainActivitiesDescription.text = community?.mainActivities
            curiositiesDescription.text = community?.curiosities
        }
    }

    private fun setUpListeners() {
        binding.buttonExit.setOnClickListener {
            dialog?.dismiss()
        }
    }

    companion object {
        fun newInstance(community: Community? = null): CommunitiesDetailsDialog {
            return CommunitiesDetailsDialog().apply {
                this.community = community
            }
        }
    }
}