package juan.reina.animations;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {

    boolean firtImageIsShowing = true;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void fade(View v) {

        Log.i("Info", "ImageView touched");

        ImageView imageView1 = findViewById(R.id.imageView1);
        ImageView imageView2 = findViewById(R.id.imageView2);

        if (firtImageIsShowing) {
            imageView1.animate().alpha(0).setDuration(2000);
            imageView2.animate().alpha(1).setDuration(2000);
            firtImageIsShowing = false;
        } else {
            imageView1.animate().alpha(1).setDuration(2000);
            imageView2.animate().alpha(0).setDuration(2000);
            firtImageIsShowing = true;
        }

    }
}
