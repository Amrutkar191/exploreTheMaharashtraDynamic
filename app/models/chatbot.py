from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate
from dotenv import load_dotenv
load_dotenv()
import os

def chatbot(input):
    
    Groq_api_key = os.getenv("GROQ_API_KEY")
    
    llm = ChatGroq(
        model = "llama-3.3-70b-versatile",
        temperature=0.6,
        api_key = Groq_api_key,
    )

    prompt = ChatPromptTemplate.from_messages(
    [
        ("system", "You are an intelligent multilingual AI assistant. Answer every question with accuracy and in respoectful and conversational tone."),
        ("human", "{input}")
    ]
    )

    chain = prompt | llm
    result = chain.invoke(input)
    print(result)
    return result.content
