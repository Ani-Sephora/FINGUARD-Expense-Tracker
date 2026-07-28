import pandas as pd

# Load your original dataset
df = pd.read_csv("data/budget_data.csv")

# Add the missing 'user' column
df['user'] = 'srimathi'  # Or change it if needed

# Fix misspelled categories (optional)
df['category'] = df['category'].replace({
    'Restuarant': 'Restaurant',
    'Coffe': 'Coffee'
})

# Save to the file that app.py will use
df.to_csv("data/finance_data.csv", index=False)

print("✅ Dataset converted and saved to data/finance_data.csv")
