package com.example.demo;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.example.demo.domain.SmartPhone;
import com.example.demo.domain.pieces.Battery;
import com.example.demo.domain.pieces.CPU;
import com.example.demo.domain.pieces.Camera;
import com.example.demo.domain.pieces.RAM;
import com.example.demo.service.SmartPhoneServiceImpl;

public class SmartPhoneServiceTest {

	SmartPhoneServiceImpl sut;
	
	@BeforeEach // se ejecuta antes de cada test
	public void setUp() throws Exception {
		sut = new SmartPhoneServiceImpl();
	}

	@Test
	public void testCount() {
		Integer numPhones = sut.count();
		assertEquals(3, numPhones);
		
		sut.delete(1L);
		
		numPhones = sut.count();
		assertEquals(2, numPhones);
		
		sut.delete(9999L);
		
		numPhones = sut.count();
		assertEquals(2, numPhones);
		
		sut.deleteAll();
		
		numPhones = sut.count();
		assertEquals(0, numPhones);	}

	@Test
	public void testFindAll() {
		List<SmartPhone> phones = sut.findAll();
		assertEquals(3, phones.size());
		
		sut.delete(1L);
		
		phones = sut.findAll();
		assertEquals(2, phones.size());
		
		for (SmartPhone smartPhone : phones) {
			assertNotNull(smartPhone.getId());
		}	}

	@Test
	public void testFindOne() {
		SmartPhone phone = sut.findOne(1L);
		assertNotNull(phone);
	}

	@Test
	public void testSave() {
		SmartPhone phone1 = new SmartPhone(0L, "IPhone X", 
				new RAM(2L, "DDR3", 4),
				new Battery(2L, 3500.0),
				new CPU(2L, 2),
				true,
				new Camera(2L, "front camera", 8.5));
		
		SmartPhone result = sut.save(phone1);
		assertNotNull(result);
	}

	@Test
	public void testDelete() {
		boolean result = sut.delete(1L);
		assertTrue(result);
		
		result = sut.delete(1L);
		assertFalse(result);
	}

	@Test
	public void testDeleteAll() {
		sut.deleteAll();
		List<SmartPhone> results = sut.findAll();
		assertEquals(0, results.size());
	}

	@Test
	public void testFindByWifiTrue() {
		List<SmartPhone> phones = sut.findByWifi(true);
		assertEquals(2, phones.size());
	}
	
	@Test
	public void testFindByWifiFalse() {
		List<SmartPhone> phones = sut.findByWifi(false);
		assertEquals(1, phones.size());
	}

}
