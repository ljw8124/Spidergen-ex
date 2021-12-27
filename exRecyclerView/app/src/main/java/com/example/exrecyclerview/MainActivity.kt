package com.example.exrecyclerview

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.LinearLayout
import androidx.recyclerview.widget.LinearLayoutManager
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        var userList = arrayListOf<User>(
            User("홍길동", "hong@naver.com", "image1.png"),
            User("이규성", "Lee@naver.com", "image2.png"),
            User("김민수", "Kimmin@naver.com", "image3.png"),
            User("김철수", "stealwater@naver.com", "image4.png"),
            User("오랑캐", "foreign@naver.com", "image5.png")
        )

        //레이아웃매니저 설정
        exRecyclerView.layoutManager = LinearLayoutManager(this, LinearLayout.VERTICAL, false)
        exRecyclerView.setHasFixedSize(true)

        //어답터 설정
        exRecyclerView.adapter = RecyclerViewAdapter(userList)


    }
}

data class User(val name: String, val email: String, val photo: String)

