def analyze_behavior(df):
    if df.empty:
        return ["No expense data found. Start tracking!"]

    total_spent = df["amount"].sum()
    top_category = df["category"].value_counts().idxmax()

    return [
        f"Total spent: ₹{total_spent:.2f}",
        f"Top spending area: {top_category}",
        "Tip: Set monthly limits for non-essential categories.",
        "Try allocating 20% of your income to savings."
    ]
