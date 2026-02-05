import os
import django
from django.apps import apps

# Setup Django environment
os.environ.setdefault(
    "DJANGO_SETTINGS_MODULE", "myproject.settings"
)  # Replace 'your_project_name' with your actual project name
django.setup()
from django.forms.models import model_to_dict


def print_all_rows():
    # Get all registered models
    all_models = apps.get_models()

    for model in all_models:
        print(f"Table: {model._meta.db_table}")
        try:
            # Fetch all rows for the model
            rows = model.objects.all()

            if rows.exists():
                for row in rows:
                    print(model_to_dict(row))
            else:
                print("No data found.")
        except Exception as e:
            print(f"Error accessing data for {model._meta.db_table}: {e}")
        print("-" * 40)


print_all_rows()
