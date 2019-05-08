package com.mphasis.training.daoimpl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mphasis.training.dao.BookDao;
import com.mphasis.training.entities.Book;
import com.mphasis.training.entities.Car;

@Repository

public class BookDaoImpl implements BookDao {

	@Autowired
	SessionFactory sessionFactory;
	
	
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	public void insertBook(Book book) {
		Session session=sessionFactory.openSession();
		Transaction tr=session.beginTransaction();
		session.persist(book);
		tr.commit();
		session.close();
	}

	public void updateBook(Book book) {
		// TODO Auto-generated method stub

	}

	public void deleteBook(int bookid) {
		// TODO Auto-generated method stub

	}

	public Book retriveBookById(int bookid) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Book> retriveBooks() {
		Session session=sessionFactory.openSession();
		List<Book> cars=session.createCriteria(Book.class).list();
		return cars;
	}

}
