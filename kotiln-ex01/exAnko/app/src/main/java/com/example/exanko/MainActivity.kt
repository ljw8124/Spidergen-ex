package com.example.exanko

import android.content.Context
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.Gravity
import android.view.inputmethod.InputMethodManager
import org.jetbrains.anko.*
import org.jetbrains.anko.sdk27.coroutines.onClick

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        //setContentView(R.layout.activity_main)

        //Anko 동적 실행
        //Vertical Linear layout 사용하겠다는것
        verticalLayout {
            //이미지뷰 - 샘플이미지를 하나 띄움
            imageView(R.mipmap.ic_launcher).lparams {
                width = wrapContent
                padding = dip(16)
                margin = dip(20)
                gravity = Gravity.CENTER
            }

            //editText 입력을 받음
            val name = editText {
                hint = "당신의 이름은~?"
            }

            //결과 출력
            var result = textView() {
                hint = "result"
                textSize = 24f
            }.lparams {
                width = wrapContent
                topMargin = dip(20)
                gravity = Gravity.CENTER
            }

            //버튼클릭시
            button("확 인") {
                onClick {
                    //메시지
                    //toast("안녕 : ${anme.text}")
                    //editText를 비움
                    result.setText("${name.text}님 반갑습니다!!!!")
                    name.setText("")

                    //키보드 패널을 내림
                    val imm = getSystemService(Context.INPUT_METHOD_SERVICE) as InputMethodManager
                    imm.hideSoftInputFromWindow(name.windowToken, 0)
                }
            }.lparams {
                width = wrapContent
                horizontalMargin = dip(20)
                topMargin = dip(10)
                gravity = Gravity.CENTER
            }

        }

    }
}