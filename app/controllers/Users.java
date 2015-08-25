package controllers;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;
import models.User;

import java.util.Map;

/**
 * Created by mark on 15/8/25.
 */
public class Users extends BaseController{
    public static void list(){
        renderJSON(User.findAll());
    }

    public static void delete(int id){
        User.delete("id", id);
    }

    public static void deleteAll(){
        User.deleteAll();
    }

    public static void add(User user){
        user.save();
    }
}
