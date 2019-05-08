package com.mphasis.training.dao;

import java.util.List;

import com.mphasis.training.entities.Book;


public interface BookDao {
	public void insertBook(Book book);
	public void updateBook(Book book);
	public void deleteBook(int bookid);
	public Book retriveBookById(int bookid);
	public List<Book> retriveBooks();
}
