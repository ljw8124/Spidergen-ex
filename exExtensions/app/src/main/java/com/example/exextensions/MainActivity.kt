package com.example.exextensions

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        button.setOnClickListener {
            //editText에서 입력되어 있는 텍스트를 가져옴 -> extensions을 사용하여 findViewById()를 사용하지 않음
            var getText = editText.text

            //사용자가 입력한 글자를 result texxtView에 출력
            resultView.setText(getText)

            Toast.makeText(this, "입력한 텍스트는 ${getText}입니다.", Toast.LENGTH_LONG).show()

            //입력필드는 초기화
            editText.setText("")
        }
    }
}