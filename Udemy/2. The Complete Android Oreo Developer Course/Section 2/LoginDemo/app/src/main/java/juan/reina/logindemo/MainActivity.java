package juan.reina.logindemo;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void login(View v) {
        EditText username = findViewById(R.id.userNameEditText);
        EditText password = findViewById(R.id.passwordEditText);

        Log.i("Info", "Button pressed!!");
        Log.i("Username", username.getText().toString());
        Log.i("Password", password.getText().toString());

        Toast.makeText(this, "Hi there!", Toast.LENGTH_SHORT).show();
    }
}
