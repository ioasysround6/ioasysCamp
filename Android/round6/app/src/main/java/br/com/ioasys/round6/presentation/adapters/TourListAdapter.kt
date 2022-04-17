package br.com.ioasys.round6.presentation.adapters

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import br.com.ioasys.round6.databinding.PackageItemBinding
import br.com.ioasys.round6.domain.model.Tour

class TourListAdapter : ListAdapter<Tour, TourListAdapter.TourListViewHolder>(DIFF_CALLBACK) {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): TourListViewHolder {
        return TourListViewHolder.create(parent)
    }

    override fun onBindViewHolder(holder: TourListViewHolder, position: Int) {
        holder.bind(getItem(position))
    }

    companion object {
        private val DIFF_CALLBACK = object : DiffUtil.ItemCallback<Tour>() {

            override fun areItemsTheSame(oldItem: Tour, newItem: Tour) =
                oldItem.id == newItem.id

            override fun areContentsTheSame(oldItem: Tour, newItem: Tour) =
                oldItem == newItem
        }
    }

    class TourListViewHolder(
        private val binding: PackageItemBinding
    ) : RecyclerView.ViewHolder(binding.root) {

        fun bind(tour: Tour) {
            binding.apply {
                packageName.text = tour.tourName
                communityName.text = tour.communityName
            }
        }

        companion object {
            fun create(parent: ViewGroup): TourListViewHolder {
                val binding = PackageItemBinding.inflate(
                    LayoutInflater.from(parent.context),
                    parent, false
                )

                return TourListViewHolder(binding)
            }
        }
    }
}