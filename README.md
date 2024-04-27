# Football-Twitter-Sentiment-Analysis

Our project was run on colab.  

The Distilbert_models.ipynb, TF_IDF_Naive_Bayes_Scraped.ipynb, and additional_dataset_models.ipynb files contain the code we used to get our results. We also utilized a dataset from kaggle that contained tweets of all teams in the English Premier League from September 2020 to October 2020 (additional_dataset_models.ipynb). Directions for how to reproduce our results are below.  

## Data:
Scraped data: The data is stored in a google drive: https://drive.google.com/drive/folders/11-hsLbkcvsVJv1d71-H1hdmRck7WYDWi?usp=drive_link  
The code we used to scrape the data is under `script.ts`.

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
The preprocessing that occurred for the TF-IDF + Naive Bayes method included:
  - removing stopwords
  - changing everything to lower case
  - changing `'t` to `not`
  - removing the hashtags from the tweets
  - removing punctuation other than the `?`
  - removing extra whitespace  
The preprocessing that occurred for the fine-tuned DistilBERT (and regular DistilBERT) models included the same as above as well as: 
  -  removing links
  -  splitting the text into tokens
  -  adding the `[CLS]` and `[SEP]` tokens
  -  padding and truncating sentences to a set maximum length

## Final results: 
**Basic DistilBERT model using our scraped data:** 
- AUC: 0.4853
- Accuracy: 78.15%
- F1-score: 0.88
- <img width="606" alt="Screenshot 2024-04-26 at 6 51 10 PM" src="https://github.com/LindyZhang/Football-Twitter-Sentiment-Analysis/assets/112991905/0281c842-cedb-4caf-915e-5157d7c20561">
- <img width="626" alt="Screenshot 2024-04-26 at 6 51 39 PM" src="https://github.com/LindyZhang/Football-Twitter-Sentiment-Analysis/assets/112991905/2dd6d053-f7ed-4512-b769-f3696c25b4d9">   
Based on the results above, we see that the basic DistilBERT does pretty well at predicting the sentiment of the tweets. When we were training the model, it seemed as though the model was not as good as our fine-tuned model because the validation loss was not decreasing as steadily or getting as low. However, based on how the basic model did on our test data, we see that the validation and test accuracies were pretty similar, indicating that the basic model was not overfitting.  


**Fine-tuned DistilBERT model using our scraped data:**  
- AUC: 0.4927
- Accuracy: 64.06%
- F1-score: 0.77
- <img width="619" alt="Scraped_data_fine_tuned_distilbert" src="https://github.com/LindyZhang/Football-Twitter-Sentiment-Analysis/assets/112991905/ca249e3d-4cfd-4600-85bc-3142bafeff7a">
- <img width="654" alt="Scraped_data_predictions_fine_funted_distilbert" src="https://github.com/LindyZhang/Football-Twitter-Sentiment-Analysis/assets/112991905/17b960c5-7def-4449-944c-d62231a63fc1">   
Based on the results above, we see that our fine-tuned DistilBERT model performs worse. This is despite the fact that the training progression shows a steadily decreasing validation loss. However, the reason for the high validation accuracy is likely due to overfitting. With more time, we could implement countermeasures to the overfitting and add more complexity to the model to improve it.  


**TF-IDF + Naive Bayes Classifier approach using our scraped data:**  
- AUC: 0.8858
- Accuracy: 86.34%
- F1-score: 0.92
- <img width="609" alt="Screenshot 2024-04-26 at 6 53 04 PM" src="https://github.com/LindyZhang/Football-Twitter-Sentiment-Analysis/assets/112991905/e02bbb38-b116-4572-b7b5-986b38bd2772">   
Based on the results above, we see that the TF-IDF and Naive Bayes Classifier works very well on our test set. It works better than the basic DistilBERT model and further exploration into different improvements for this could improve our approach.  


**TF-IDF + Naive Bayes Classifier approach using our additional data:**  
- AUC: 0.7029
- Accuracy: 85.73%
- <img width="624" alt="Screenshot 2024-04-26 at 6 54 50 PM" src="https://github.com/LindyZhang/Football-Twitter-Sentiment-Analysis/assets/112991905/7dd71fdc-752f-4e57-9b71-d76f6fc5bf89">  
We see that the TF-IDF + Naive Bayes Classifier works well on the additional dataset as well. We do not see as high of an accuracy as it gets on the test set, but it is very close and better than the fine-tuned DistilBERT.  


**Fine-tuned DistilBERT model using our additional data:**  
- AUC: 0.5021
- Accuracy: 73.07%
- <img width="615" alt="Screenshot 2024-04-26 at 6 55 22 PM" src="https://github.com/LindyZhang/Football-Twitter-Sentiment-Analysis/assets/112991905/2bdeb687-28bd-4238-a72f-4fe7fad2c2f5">
- <img width="610" alt="Screenshot 2024-04-26 at 6 55 40 PM" src="https://github.com/LindyZhang/Football-Twitter-Sentiment-Analysis/assets/112991905/1c9ae0c6-9a37-42f5-9ba7-b42c20c54dd5">  
Testing the fine-tuned model on a different dataset showed that the accuracy was pretty similar to the results that we got with our scraped data. This means that the model is likely still overfitting to our training and validation data.  



**Team Member Responsibilities:**  
- Alan: Data scraping, Twitter API implementation (attempted before we realized we needed to scrape), data QA, and presentation.
- Arthur: Data visualization, presentation, project objectives, and help with Twitter API.
- Lindy:  TF-IDF + Naive Bayes, Fine-tuning DistilBERT, code documentation, presentation.

## Code Documentation:  
### Vader model:  
We used the Vader model in order to label the sentiment values of our scraped tweets. This is because we did not have the capacity to label all 7500+ tweets by hand, and the vader model works well with slang. The preprocessing of the scraped tweets involves getting rid of links, remove hashtags, removing whitespace, and adding sentiment values. In order to align our sentiment values to work with binary classification, we categorized the sentiment scores returned by the vader model to be either positive (1) or negative (0). This is one of our possible sources of error because there are neutral tweets that we ended up grouping in with positive sentiments. For example, if people tweet about selling tickets for a game and tag the teams, we mark it as positive because any press is good press (or that's the assumption we are operating under).  

### TF-IDF and Naive Bayes:  
We used TF-IDF to vectorize our text and then the Naive Bayes model as our classifier. In the bag-of-words model, a text is represented as the bag of its words, disregarding grammar and word order. We want to remove stop words, punctuations, and characters that don't contribute much to the sentence's meaning. The TF-IDF Vectorizer reflects how important a word is to a document in a collection. We used the MultinomialNB class because it is good for text classification. We optimized its hyperparameter alpha in our files to get the optimal area under the curve value. It seemed like the typical alpha value ranged between 0.1 and 0.2 throughout our trials. We then trained the model using our training and validation data and tested its performance on the test set.  

### Fine-tuning DistilBERT:  
We created a DistilBERT model that extracted the last hidden layer of the [CLS] token and a single hidden layer feed-forward neural network as our classifier. (We added in the [CLS] and [SEP] tokens in our preprocessing). We used the AdamW optimizer with a learning rate of 5e-5, an epsilon value of 1e-8, and 2 epochs.  
In terms of the training loop, we unpacked our data and zeroed out the gradients in the previous pass. We then performed a forward pass to compute logits and lost, performed a backward pass to compute gradients, and clipped the norm. Finally, we updated the model's parameters and learning rate.  
When evaluating, we unpacked our data, did a forward pass, and computed the loss and accuracy over the validation set.  
Finally, when we predicted the values for the sentiment we would get for the test set tweets, we performed a forward pass to compute logits and applied a softmax to calculate the probabilities. With more time and computational resources, we could improve this model further to hopefully outperform the basic DistilBERT.  
For the basic DistilBERT, we simply froze the parameters and trained the model on our data.
