<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use Cart;

class ProductController extends Controller
{

    public function getProduct()
    {
        return view('index', ['products' => Product::get()]);
    }

    public function showShopCart()
    {
        return view('cart', ['Carts' => Cart::content(), 'qty' => [1,2,3,4,5,6], 'totalPrice' => Cart::total()]);
    }

    public function xhrAddCart(Request $request)
    {
        if($request->ajax()) {
            $product = Product::find($request->input('id'));
            if(empty($product)) {
                return false;
            }
            Cart::add(['id' => $product->_id , 'name' => $product->name, 'qty' => 1, 'price' => $product->price ]);
            return true;
        }
    }

    public function xhrRemoveCart(Request $request)
    {
        if($request->ajax()) {
            $rowId = $request->input('rowId');
            Cart::remove($rowId);
            return [ 'rowId' => $rowId];
        }
    }

    public function xhrUpdateCart(Request $request)
    {
        if($request->ajax()) {
            $status = [];
            $cart = Cart::update($request->input('rowId'), $request->input('qty'));

            if($cart) {

                $status['message']  = 'Update shoping cart success !';
                $status['isUpdate'] = true;
                $status['total']    = Cart::total();
                return $status;
            }

            $status['message']  = 'Update shoping cart failed !';
            $status['isUpdate'] = false;

            return $status;
        }
    }


    public function createProduct()
    {
        $oProduct = new Product();
        $oProduct->name = 'Defyant Reversible Dot Shorts';
        $oProduct->price = 80.00;
        $oProduct->save();
    }
}

