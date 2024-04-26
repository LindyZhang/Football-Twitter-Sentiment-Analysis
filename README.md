# Football-Twitter-Sentiment-Analysis

Our project was run on colab.  

The Distilbert_models and Baseline_Scraped_Tweets files contain the code we used on our scraped tweets. We also utilized a dataset from kaggle that contained tweets of all teams in the English Premier League from September 2020 to October 2020. Directions for how to reproduce our results are below.  

## Data:
Scraped data: Football-Twitter-Sentiment-Analysis/dataset

Additional dataset: https://www.kaggle.com/datasets/wjia26/epl-teams-twitter-sentiment-dataset?resource=download&select=2020-09-20+till+2020-10-13.csv   
(We used only the 2020-09-20 till 2020-10-13.csv)

## Reproducing:  
**Run the files in google colab.**  

**The folder path when reading in the scraped dataset can vary based on where you stored the file. That will need to be updated if you are reproducing our results. A screenshot showing the cell with the folder_path that needs to be updated is shown below.**   
<img width="668" alt="Screenshot 2024-04-22 at 10 22 08 PM" src="https://github.com/LindyZhang/Football-Twitter-Sentiment-Analysis/assets/112991905/5993382c-7ed2-405f-8faa-c0007fde4967">

The scraped data needs to be downloaded onto your Google Drive in order to execute the code in colab and it should be in the same directory as our .ipynb files. The additional dataset needs to be downloaded into your files, and colab will have you choose the file you want to get from your computer (2020-09-20 till 2020-10-13.csv).  

All libraries used should be the most recent versions.  

Use the CPU as the hardware accelerator on colab. (we used this because of issues with running out of compute units when trying to use the T4 GPU)   
<img width="586" alt="Screenshot 2024-04-22 at 10 20 47 PM" src="https://github.com/LindyZhang/Football-Twitter-Sentiment-Analysis/assets/112991905/b179e617-a1d8-4e80-9022-69b6b6e86141">


The processing of the data is done in the cells of our files. You should not have to do any additional preprocessing, just make sure to run all of the cells in the files.  

## Final results: 
Basic DistilBERT model using our scraped data:  
- AUC: 0.4853
- Accuracy: 78.15%
- F1-score: 0.88

Fine-tuned DistilBERT model using our scraped data:  
- AUC: 0.4927
- Accuracy: 64.06%
- F1-score: 0.77

TF-IDF + Naive Bayes Classifier approach using our scraped data:  
- AUC: 0.8858
- Accuracy: 86.34%
- F1-score: 0.92

TF-IDF + Naive Bayes Classifier approach using our additional data:  
- AUC: 0.7029
- Accuracy: 85.73%

Fine-tuned DistilBERT model using our additional data:  
- AUC: 0.5021
- Accuracy: 73.07%

## Team Member Responsibilities:  
- Alan: Data scraping, Twitter API implementation (attempted before we realized we needed to scrape), data QA, and presentation.
- Arthur: Data visualization, presentation, project objectives, and help with Twitter API.
- Lindy:  

## Code Documentation:  
### Vader model:  
We used the Vader model in order to label the sentiment values of our scraped tweets. This is because we did not have the capacity to label all 7500+ tweets by hand, and the vader model works well with slang. The preprocessing of the scraped tweets involves getting rid of links, remove hashtags, removing whitespace, and adding sentiment values. In order to align our sentiment values to work with binary classification, we categorized the sentiment scores returned by the vader model to be either positive (1) or negative (0). This is one of our possible sources of error because there are neutral tweets that we ended up grouping in with positive sentiments. For example, if people tweet about selling tickets for a game and tag the teams, we mark it as positive because any press is good press (or that's the assumption we are operating under).  

### TF-IDF and Naive Bayes:  
We used TF-IDF to vectorize our text and then the Naive Bayes model as our classifier. In the bag-of-words model, a text is represented as the bag of its words, disregarding grammar and word order. We want to remove stop words, punctuations, and characters that don't contribute much to the sentence's meaning. The TF-IDF Vectorizer reflects how important a word is to a document in a collection. We used the MultinomialNB class which has the hyperparameter alpha. We optimized that in our files. We then trained the model using our training and validation data and tested its performance on the test set.  

### Fine-tuning DistilBERT:  
We created a DistilBERT model that extracted the last hidden layer of the [CLS] token and a single hidden layer feed-forward neural network as our classifier. (We added in the [CLS] and [SEP] tokens in our preprocessing). We used the AdamW optimizer with a learning rate of 5e-5, an epsilon value of 1e-8, and 2 epochs.  
In terms of the training loop, we unpacked our data and zeroed out the gradients in the previous pass. We then performed a forward pass to compute logits and lost, performed a backward pass to compute gradients, and clipped the norm. Finally, we updated the model's parameters and learning rate.  
When evaluating, we unpacked our data, did a forward pass, and computed the loss and accuracy over the validation set.  
Finally, when we predicted the values for the sentiment we would get for the test set tweets, we performed a forward pass to compute logits and applied a softmax to calculate the probabilities. 
