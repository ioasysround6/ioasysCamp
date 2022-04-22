package br.com.ioasys.round6.presentation.adapters

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import br.com.ioasys.round6.R
import br.com.ioasys.round6.databinding.CommunityItemBinding
import br.com.ioasys.round6.domain.model.Community
import coil.load

class CommunityAdapter :
    ListAdapter<Community, CommunityAdapter.CommunityViewHolder>(DIFF_CALLBACK) {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): CommunityViewHolder {
        return CommunityViewHolder.create(parent)
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
        private val binding: CommunityItemBinding
    ) : RecyclerView.ViewHolder(binding.root) {

        fun bind(community: Community) {
            binding.apply {
                tvCommunityName.text = community.communityName

                communityImage.load(community.photo1) {
                    error(R.drawable.community_image)
                }
            }
        }

        companion object {
            fun create(parent: ViewGroup): CommunityViewHolder {
                val binding = CommunityItemBinding.inflate(
                    LayoutInflater.from(parent.context),
                    parent, false
                )

                return CommunityViewHolder(binding)
            }
        }
    }
}