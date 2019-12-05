package juan.reina.timetables;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.DividerItemDecoration;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.util.Log;
import android.widget.SeekBar;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;


public class MainActivity extends AppCompatActivity {

    private RecyclerView.LayoutManager layoutManager;
    private RecyclerView recyclerView;
    private RVAdapter rvAdapter;
    private SeekBar timesTablesSeekBar;
    private List<String> timesTableDataSet = new ArrayList<String>();

    private void calculateDataSet(int progressSeek) {
        IntStream.range(1, 10).forEach(
                nbr -> timesTableDataSet.add(Integer.toString(nbr * progressSeek))
        );
    }

    private void initializeSeekBar() {
        timesTablesSeekBar = findViewById(R.id.timesTablesSeekBar);
        timesTablesSeekBar.setMax(20);
        timesTablesSeekBar.setProgress(10);
    }

    private void initializeReciclerView() {
        recyclerView = findViewById(R.id.recyclerView);
        recyclerView.addItemDecoration(new DividerItemDecoration(recyclerView.getContext(), DividerItemDecoration.VERTICAL));
        layoutManager = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(layoutManager);
        recyclerView.addItemDecoration(new DividerItemDecoration(recyclerView.getContext(), DividerItemDecoration.HORIZONTAL));
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        initializeSeekBar();
        initializeReciclerView();

        calculateDataSet(10);

        rvAdapter = new RVAdapter(timesTableDataSet);
        recyclerView.setAdapter(rvAdapter);


        timesTablesSeekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                int min = 1;
                int timesTableNumber;
                if (progress < min) {
                    timesTableNumber = min;
                    timesTablesSeekBar.setProgress(min);
                } else {
                    timesTableNumber = progress;
                }

                Log.i("Seekbar Values", Integer.toString(timesTableNumber));

                timesTableDataSet.clear();
                rvAdapter.notifyDataSetChanged();
                calculateDataSet(timesTableNumber);
                rvAdapter.notifyDataSetChanged();
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {

            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {

            }
        });
    }
}
