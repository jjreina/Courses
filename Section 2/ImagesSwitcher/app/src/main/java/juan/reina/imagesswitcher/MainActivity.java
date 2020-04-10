package juan.reina.imagesswitcher;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {

    Boolean switcherFlag = true;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void switcherButton(View v) {
        Log.i("Info", "Button pressed");
        int codImage = R.drawable.cod;
        int gowImage = R.drawable.cod;
        ImageView img = findViewById(R.id.iv);
        if (switcherFlag == false) {
            img.setImageResource(R.drawable.cod);
            switcherFlag = true;
        } else {
            img.setImageResource(R.drawable.gow);
            switcherFlag = false;
        }

    }
}
