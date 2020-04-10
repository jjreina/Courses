package juan.reina.timetables;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

class RVAdapter extends RecyclerView.Adapter<RVAdapter.TimeTablesViewHolder> {

    private List<String> timesTableDataSet;

    // Constructor
    public RVAdapter(List<String> nameFamily) {
        this.timesTableDataSet = nameFamily;
    }

    @NonNull
    @Override
    public TimeTablesViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.list_layout, parent, false);
        TimeTablesViewHolder vh = new TimeTablesViewHolder(v);
        return vh;
    }

    @Override
    public void onBindViewHolder(@NonNull final TimeTablesViewHolder holder, int position) {
        holder.timeTables.setText(timesTableDataSet.get(position));
    }

    @Override
    public int getItemCount() {
        return timesTableDataSet.size();
    }

    public static class TimeTablesViewHolder extends RecyclerView.ViewHolder {
        private TextView timeTables;

        TimeTablesViewHolder(View itemView) {
            super(itemView);
            timeTables = itemView.findViewById(R.id.timeTables);
        }
    }
}
