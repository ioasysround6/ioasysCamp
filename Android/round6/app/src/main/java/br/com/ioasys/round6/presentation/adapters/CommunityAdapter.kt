package br.com.ioasys.round6.presentation.adapters

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import br.com.ioasys.round6.R
import br.com.ioasys.round6.databinding.CommunityItemBinding
import br.com.ioasys.round6.domain.model.Community
import br.com.ioasys.round6.presentation.listeners.CommunityClickListener
import coil.load

class CommunityAdapter(
    private val onCommunityClickListener: CommunityClickListener
) : ListAdapter<Community, CommunityAdapter.CommunityViewHolder>(DIFF_CALLBACK) {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): CommunityViewHolder {
        return CommunityViewHolder.create(parent, onCommunityClickListener)
    }

    override fun onBindViewHolder(holder: CommunityViewHolder, position: Int) {
        holder.bind(getItem(position))
    }

    companion object {
        private val DIFF_CALLBACK = object : DiffUtil.ItemCallback<Community>() {

            override fun areItemsTheSame(oldItem: Community, newItem: Community) =
                oldItem.id == newItem.id

            override fun areContentsTheSame(oldItem: Community, newItem: Community) =
                oldItem == newItem
        }
    }

    class CommunityViewHolder(
        private val binding: CommunityItemBinding,
        private val onCommunityClickListener: CommunityClickListener
    ) : RecyclerView.ViewHolder(binding.root) {

        fun bind(community: Community) {
            binding.apply {
                communityName.text = community.communityName

                communityImage.load(community.photo1) {
                    error(R.drawable.community_image)
                }

                root.setOnClickListener {
                    onCommunityClickListener.onCommunityClickListener(community)
                }
            }
        }

        companion object {
            fun create(
                parent: ViewGroup,
                onCommunityClickListener: CommunityClickListener
            ): CommunityViewHolder {
                val binding = CommunityItemBinding.inflate(
                    LayoutInflater.from(parent.context),
                    parent, false
                )

                return CommunityViewHolder(binding, onCommunityClickListener)
            }
        }
    }
}