package com.example.exrecyclerview

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.recyclerview.widget.RecyclerView

class RecyclerViewAdapter(val userList:ArrayList<User>):RecyclerView.Adapter<RecyclerViewAdapter.ViewHolder>() {

    //아이템의 갯수
    override fun getItemCount(): Int {
        return userList.size
    }


    //this method is binding the data on the list
    override fun onBindViewHolder(holder: RecyclerViewAdapter.ViewHolder, position: Int) {
        holder.bindItems(userList[position])
    }


    class ViewHolder(view: View): RecyclerView.ViewHolder(view) {
        fun bindItems(data : User){

            //itemView.imageView_photo.setImageBitmap(data.photo)

            //각각의 아이템 클릭시
            itemView.setOnClickListener({
                //여기서 토스터를 어떻게?
                Toast.makeText(itemView.context, "아이템 '${data.name}'를 클릭했습니다.", Toast.LENGTH_LONG).show()
            })
        }

    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        TODO("Not yet implemented")
    }

}
