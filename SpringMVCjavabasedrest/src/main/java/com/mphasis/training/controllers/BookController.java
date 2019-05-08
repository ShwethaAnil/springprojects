package com.mphasis.training.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mphasis.training.dao.BookDao;
import com.mphasis.training.entities.Book;

@RestController
public class BookController {
	
	@Autowired
	BookDao bookDao;

	public void setBookDao(BookDao bookDao) {
		this.bookDao = bookDao;
	}
	
	@RequestMapping(value="/books",
			method=RequestMethod.GET,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Book> getBooks(){
		return  bookDao.retriveBooks();
	}
	
	@RequestMapping(value="/book/add",method=RequestMethod.POST)
	public void addBook(@RequestBody Book book) {
		bookDao.insertBook(book);
	}
	

}
