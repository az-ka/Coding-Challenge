/**
 * TODO:
 * CodeWars Challenge
 * Link: https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
 * Title: PaginationHelper
 * Language: JavaScript
 * Submitted: 16/02/2024
 * Challenge Day: 21
 * Author: Azka
 * Message for the Day: "Now is the time to do it. If you wait, it might never happen."
 */

class PaginationHelper {
    // Konstruktor menerima dua parameter: koleksi item dan jumlah item per halaman
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    // Mengembalikan jumlah total item dalam koleksi
    itemCount() {
        return this.collection.length;
    }

    // Mengembalikan jumlah total halaman
    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    // Mengembalikan jumlah item pada halaman tertentu
    pageItemCount(pageIndex) {
        // Jika indeks halaman tidak valid, kembalikan -1
        if (pageIndex < 0 || pageIndex >= this.pageCount()) {
            return -1;
        }
        // Jika bukan halaman terakhir, atau jika jumlah item pada halaman terakhir sama dengan itemsPerPage, kembalikan itemsPerPage
        // Jika tidak, kembalikan jumlah item pada halaman terakhir
        return pageIndex < this.pageCount() - 1 ||
            this.collection.length % this.itemsPerPage === 0
            ? this.itemsPerPage
            : this.collection.length % this.itemsPerPage;
    }

    // Mengembalikan indeks halaman tempat item tertentu berada
    pageIndex(itemIndex) {
        // Jika indeks item tidak valid, kembalikan -1
        if (itemIndex < 0 || itemIndex >= this.collection.length) {
            return -1;
        }
        // Kembalikan indeks halaman tempat item berada
        return Math.floor(itemIndex / this.itemsPerPage);
    }
}

const helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
console.log(helper.pageCount()); // should == 2
