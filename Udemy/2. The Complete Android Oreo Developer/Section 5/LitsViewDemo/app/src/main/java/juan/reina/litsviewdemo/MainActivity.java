package juan.reina.litsviewdemo;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.DividerItemDecoration;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.widget.ArrayAdapter;

import java.util.ArrayList;
import java.util.List;

import static java.util.Arrays.asList;

public class MainActivity extends AppCompatActivity {

    private RecyclerView.LayoutManager layoutManager;
    private RecyclerView recyclerView;
    private RVAdapter rvAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        recyclerView = findViewById(R.id.recyclerView);
        recyclerView.setHasFixedSize(true);
        recyclerView.addItemDecoration(new DividerItemDecoration(recyclerView.getContext(), DividerItemDecoration.VERTICAL));
        List<String> myFamilyDataset = new ArrayList<String>(asList("Juan", "Bea", "Alejandra", "Diego"));

        // use a linear layout manager
        layoutManager = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(layoutManager);

        // specify an adapter (see also next example)
        rvAdapter = new RVAdapter(myFamilyDataset);
        recyclerView.setAdapter(rvAdapter);

    }
}
