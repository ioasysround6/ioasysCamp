package br.com.ioasys.round6.presentation.adapters

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import androidx.recyclerview.widget.RecyclerView
import br.com.ioasys.round6.R
import coil.load

class SliderViewPagerAdapter(private val mImageList: List<String>) :
    RecyclerView.Adapter<SliderViewPagerAdapter.ImageViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ImageViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.image_slider_item, parent, false)

        return ImageViewHolder(view)
    }

    override fun onBindViewHolder(holder: ImageViewHolder, position: Int) {
        holder.bind(mImageList[position])
    }

    override fun getItemCount(): Int = mImageList.size

    class ImageViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        private val sliderImage = itemView.findViewById<ImageView>(R.id.sliderImage)

        fun bind(string: String) {
            sliderImage.load(string) {
                error(R.drawable.image)
            }
        }
    }
}