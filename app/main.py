from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from app.models.chatbot import chatbot
from dotenv import load_dotenv

load_dotenv()


app = FastAPI(title= "Explore the Mahabharata with AI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.post("/chat")
def ask_genie(question: str):
    response = chatbot(question)
    return {"response": response}
