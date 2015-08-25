package models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by mark on 15/8/21.
 */
@Entity
@Table(name = "user")
public class User extends BaseModel {
    @Id
    public int id;
    public String name;
    public String password;
}
