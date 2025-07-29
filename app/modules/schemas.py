from pydantic import BaseModel, Field
import os
from typing import List, Literal


class ChatInput(BaseModel):
    question: str