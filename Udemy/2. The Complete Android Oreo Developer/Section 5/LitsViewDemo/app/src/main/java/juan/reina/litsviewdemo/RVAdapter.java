package juan.reina.litsviewdemo;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class RVAdapter extends RecyclerView.Adapter<RVAdapter.FamilyViewHolder> {

    private List<String> familyDataset;

    // Constructor
    public RVAdapter(List<String> nameFamily) {
        this.familyDataset = nameFamily;
    }

    @NonNull
    @Override
    public FamilyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.list_layout, parent, false);
        FamilyViewHolder vh = new FamilyViewHolder(v);
        return vh;
    }

    @Override
    public void onBindViewHolder(@NonNull final FamilyViewHolder holder, int position) {
        holder.nameFamily.setText(familyDataset.get(position));
        holder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Log.i("info:", "The item " + holder.nameFamily.getText().toString());
                Toast.makeText(v.getContext(), "hello " + holder.nameFamily.getText().toString(), Toast.LENGTH_SHORT).show();
            }
        });
    }

    @Override
    public int getItemCount() {
        return familyDataset.size();
    }

    public static class FamilyViewHolder extends RecyclerView.ViewHolder {
        private TextView nameFamily;

        FamilyViewHolder(View itemView) {
            super(itemView);
            nameFamily = itemView.findViewById(R.id.familyName);
        }
    }
}
