def get_bot_response(message):
    message = message.lower()
    if "save" in message:
        return "Save at least 20% of your income each month."
    elif "budget" in message:
        return "Use the 50-30-20 rule: Needs-Wants-Savings."
    elif "risk" in message:
        return "Build an emergency fund worth 3-6 months' expenses."
    else:
        return "Ask me about saving, budgeting, or reducing risks."
