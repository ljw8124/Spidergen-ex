package com.example.exlayout

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        //EditText 찾기
        var editText = findViewById<EditText>(R.id.editText)
        editText.setHint("당신의 이름")

        //Button 찾기
        var sendButton = findViewById<Button>(R.id.button)

        //Set on click
        sendButton.setOnClickListener {

            Toast.makeText(this, "${editText.text}님 반갑습니다.", Toast.LENGTH_LONG).show()

            //editText 값 비우기
            editText.setText("")

        }

    }
}