package br.com.ioasys.round6.presentation.adapters

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import br.com.ioasys.round6.R
import br.com.ioasys.round6.databinding.PackageItemBinding
import br.com.ioasys.round6.domain.model.Tour
import br.com.ioasys.round6.presentation.listeners.TourClickListener
import coil.load

class TourListAdapter(
    private val onTourClickListener: TourClickListener
) : ListAdapter<Tour, TourListAdapter.TourListViewHolder>(DIFF_CALLBACK) {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): TourListViewHolder {
        return TourListViewHolder.create(parent, onTourClickListener)
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
        private val binding: PackageItemBinding,
        private val onTourClickListener: TourClickListener
    ) : RecyclerView.ViewHolder(binding.root) {

        fun bind(tour: Tour) {
            binding.apply {
                packageName.text = tour.tourName
                communityName.text = tour.communityName

                packageImage.load(tour.photo1) {
                    error(R.drawable.image)
                }

                root.setOnClickListener {
                    onTourClickListener.onTourClickListener(tour)
                }
            }
        }

        companion object {
            fun create(
                parent: ViewGroup,
                onTourClickListener: TourClickListener
            ): TourListViewHolder {
                val binding = PackageItemBinding.inflate(
                    LayoutInflater.from(parent.context),
                    parent, false
                )

                return TourListViewHolder(binding, onTourClickListener)
            }
        }
    }
}