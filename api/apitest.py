import os
from dotenv import load_dotenv
from pathlib import Path
from pprint import pprint

load_dotenv(dotenv_path=Path('../.env'))

STRIPE_API_KEY = os.getenv("STRIPE_API_KEY")