package juan.reina.interactivitydemo;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void clickFunction(View v) {
        EditText nameEditText = (EditText) findViewById(R.id.nameEditText);
        Log.i("Info", "It worked!!");
        Log.i("Values", nameEditText.getText().toString());
    }
}
