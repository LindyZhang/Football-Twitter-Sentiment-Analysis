# Football-Twitter-Sentiment-Analysis

Our project was run on colab.  

The Distilbert_models and Baseline_Scraped_Tweets files contain the code we used on our scraped tweets. We also utilized a dataset from kaggle that contained tweets of all teams in the English Premier League from September 2020 to October 2020. Directions for how to reproduce our results are below.  

## Data:
Scraped data: https://drive.google.com/drive/folders/11-hsLbkcvsVJv1d71-H1hdmRck7WYDWi?usp=drive_link

Additional dataset: https://www.kaggle.com/datasets/wjia26/epl-teams-twitter-sentiment-dataset?resource=download&select=2020-09-20+till+2020-10-13.csv   

We used only the 2020-09-20 till 2020-10-13.csv  

## Reproducing:  
**Run the files in google colab.**  

**The folder path when reading in the scraped dataset can vary based on where you stored the file. That will need to be updated depending on your device.**  

The scraped data needs to be downloaded onto your google drive in order to execute the code in colab (it will ask for permission to access your google drive). The additional dataset needs to be downloaded into your files, and colab will have you choose the file you want to get from your computer (2020-09-20 till 2020-10-13.csv).  

All libraries used should be the most recent versions.  

Use the CPU as the hardware accelerator on colab. (we used this because of issues with running out of compute units when trying to use the T4 GPU)  

